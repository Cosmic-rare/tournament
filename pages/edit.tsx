import React, { useState, useEffect } from 'react';
import _ from 'lodash'
import Tournament from '@/components/edit/EditTournament';
import { notification } from 'antd';
import axios from 'axios';
import PointEditModal from '@/components/pointEditModal';
import ClassEditModal from '@/components/classEditModa';
import ThemeCustomization from "@/components/theme";
import MainLayout from "@/components/layout";
import { CircularProgress, Backdrop } from '@mui/material';
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export interface TournamentCellData {
  text?: string;
  align_left?: boolean;
  border_top?: number;
  border_left?: number;
  class?: string;
  color?: number;
  point?: string;
  edit?: number;
}

export interface dataType {
  data1: Array<any>
  data2: Array<any>
  data3: Array<any>
}

const Edit: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClassEditModalOpen, setIsClassEditModalOpen] = useState(false)
  const [api, contextHolder] = notification.useNotification();
  const [l_point, setL_point] = useState(-1)
  const [h_point, setH_point] = useState(-1)
  const [l_point2, setL_point2] = useState(-1)
  const [h_point2, setH_point2] = useState(-1)
  const [editPoint, setEditPoint] = useState(0)
  const [editClassPosition, setEditClassPosition] = useState(0)
  const [editClass, setEditClass] = useState(0)
  const [d, sD] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(null)
  const [sidebarData, setSidebarData] = useState<dataType | null>(null)
  const router = useRouter()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
    },
  })
  const handleOnOpenModal = (p: number) => {
    setEditPoint(p)

    if (d[`p_${p}`]["l_p"] === -1) {
      setL_point(0)
    } else {
      setL_point(d[`p_${p}`]["l_p"])
    }

    if (d[`p_${p}`]["h_p"] === -1) {
      setH_point(0)
    } else {
      setH_point(d[`p_${p}`]["h_p"])
    }

    if (d[`p_${p}`]["l_p2"] === -1 || d[`p_${p}`]["l_p2"] === null) {
      setL_point2(0)
    } else {
      setL_point2(d[`p_${p}`]["l_p2"])
    }

    if (d[`p_${p}`]["h_p2"] === -1 || d[`p_${p}`]["h_p2"] === null) {
      setH_point2(0)
    } else {
      setH_point2(d[`p_${p}`]["h_p2"])
    }

    setIsModalOpen(true)
  }

  const onClassEditModalOpen = (p: number, d: number) => {
    setEditClassPosition(p)
    setEditClass(d)
    setIsClassEditModalOpen(true)
  }

  const onUpdate2 = (p: number, c: number) => {
    setIsLoading(true)

    axios.post(`/api/edit2`, { targetPosition: p, insertNumber: c, id: d.id })
      .then(() => {
        axios.get(`/api/match/${page}`)
          .then((res) => {
            sD(res.data);
          })
          .catch((err) => {
            api.error({ message: 'Faild to get new data', description: 'だめですごめんなさい', duration: 10, placement: "bottomRight", className: 'custom-notification' });
          })
      })
      .catch((err) => {
        api.error({ message: 'Faild to update', description: 'だめですごめんなさい', duration: 10, placement: "bottomRight", className: 'custom-notification' });
      })
      .finally(() => { setIsLoading(false); setIsClassEditModalOpen(false) })
  }

  const onUpdate = (p: number, l_p: number, h_p: number, isReset: boolean, l_p2: number, h_p2: number, type: number | null) => {
    // reset以外で得点が0未満を弾く
    if ((l_p < 0 || h_p < 0 || l_p2 < 0 || h_p2 < 0) && !isReset) {
      return api.warning({ message: 'Valid', description: 'まいなすはないで', duration: 10, placement: "bottomRight", className: 'custom-notification' });
    }

    if (type === 1 || type === 2) {
      if (l_p === h_p && l_p2 === h_p2 && l_p !== -1 && l_p2 !== -1) {
        return api.warning({ message: 'Valid', description: 'どうてん無理やで(1|2)', duration: 10, placement: "bottomRight", className: 'custom-notification' });
      }
    } else {
      if (l_p === h_p && l_p !== -1) {
        return api.warning({ message: 'Valid', description: 'どうてん無理やで(n)', duration: 10, placement: "bottomRight", className: 'custom-notification' });
      }
    }

    setIsLoading(true)

    axios.post(`/api/edit`, { l_p: l_p, h_p: h_p, l_p2: l_p2, h_p2: h_p2, id: d.id, p: p })
      .then(() => {
        axios.get(`/api/match/${page}`)
          .then((res) => {
            sD(res.data);
          })
          .catch((err) => {
            api.error({ message: 'Faild to get new data', description: 'だめですごめんなさい', duration: 10, placement: "bottomRight", className: 'custom-notification' });
          })
      })
      .catch((err) => {
        api.error({ message: 'Faild to update', description: 'だめですごめんなさい', duration: 10, placement: "bottomRight", className: 'custom-notification' });
      })
      .finally(() => { setIsLoading(false); setIsModalOpen(false) })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`/api/match/${page}`);
        sD(res.data);
      } catch (err) {
        api.error({ message: 'Failed to get new data', description: 'だめですごめんなさい', duration: 10, placement: "bottomRight", className: 'custom-notification' });
      } finally {
        setIsLoading(false)
      }
    };

    if (page) { fetchData(); }
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`/api/get`);
        setSidebarData(res.data)

      } catch (err) {
        api.error({ message: 'Failed to get new data', description: 'だめですごめんなさい', duration: 10, placement: "bottomRight", className: 'custom-notification' });
      } finally {
        setIsLoading(false)
      }
    };

    fetchData()
  }, []);


  return (
    <>
    {d ? <>
          <PointEditModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            isLoading={isLoading}
            onUpdate={onUpdate}
            editPoint={editPoint}
            l_point={l_point}
            h_point={h_point}
            setL_point={setL_point}
            setH_point={setH_point}
            l_point2={l_point2}
            h_point2={h_point2}
            setL_point2={setL_point2}
            setH_point2={setH_point2}
            type={d.type}
          />
          <ClassEditModal
            isModalOpen={isClassEditModalOpen}
            setIsModalOpen={setIsClassEditModalOpen}
            isLoading={isLoading}
            onUpdate={onUpdate2}
            editPoint={editClassPosition}
            gread={d.gread}
            defaultClass={editClass}
          /></>
          :
          null}
      <ThemeCustomization>
        <Backdrop
          sx={{ color: '#fff', zIndex: 9999 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <MainLayout page={page} setPage={setPage} sidebarData={sidebarData}>
          {d ?
            <div style={{ width: `${30 * 15}px` }}>
              <h3>{d.sex === "male" ? "男" : d.sex === "female" ? "女" : ""}{d.title} ({d.gread}年)</h3>
              {contextHolder}
              <div style={{ position: "relative" }}>
                <Tournament
                  data={d}
                  onModalOpen={handleOnOpenModal}
                  onClassEditModalOpen={onClassEditModalOpen}
                />
              </div>
            </div>
            :
            <h4>編集するクラスを選択</h4>
          }
        </MainLayout>
      </ThemeCustomization>
    </>
  );

};

export default Edit;
