import Edit from '../edit.svg'
import cellTemplate from '../data1.json';
import draw from "@/util/draw";
import _ from "lodash";
import { TournamentCellData } from '@/pages';

const Tournament: React.FC<{ data: any, onModalOpen: Function, onClassEditModalOpen: Function }> = ({ data, onModalOpen, onClassEditModalOpen }) => {
  const colors = ["#adb5bd", "#dc3545"];
  const width = 30
  const height = 50

  const template = _.cloneDeep(cellTemplate)

  const cells: Array<TournamentCellData> = draw(data, template)

  const onEdit = (p: number) => {
    onModalOpen(p)
  }

  const onEdit2 = (p: number, d: number) => {
    onClassEditModalOpen(p, d)
  }

  return (
    <>
      {Object.entries(cells).map(([cell, cellData]) => {
        const cellStyle: React.CSSProperties = {
          position: 'absolute',
          top: `${(5 - parseFloat(cell.split('_')[1])) * height}px`,
          left: `${parseFloat(cell.split('_')[0]) * width}px`,
          height: `${height}px`,
          width: `${width}px`,
          paddingRight: cellData.align_left ? '10px' : '0',
          borderTop: cellData.border_top ? `3px solid ${colors[cellData.border_top - 1]}` : 'none',
          borderLeft: cellData.border_left ? `3px solid ${colors[cellData.border_left - 1]}` : 'none',
          verticalAlign: "bottom",
          display: "flex",
          alignItems: `${cell.split("_")[1] === "0" || cellData.edit !== undefined ? "" : "flex-end"}`,
        };

        return (
          <div key={cell} style={cellStyle}>
            <div className={cellData.class} style={{ fontSize: '0.8em', width: '100%', textAlign: cellData.align_left ? 'left' : 'center', color: cellData.color ? colors[cellData.color - 1] : 'inherit', verticalAlign: "bottom" }}>
              {cellData.point || cellData.point === 0 ? 
                cellData.point2 || cellData.point2 === 0 ? 
                  <span style={{color: colors[1]}}>{cellData.point}<br />({cellData.point2})</span>
                  :
                  <span style={{color: colors[1]}}>{cellData.point}<br /><span style={{ visibility: "hidden" }}>{"A"}</span></span>
                :
                cellData.text
              }

              {cellData.edit !== undefined ? (
                <div
                  onClick={() => onEdit(cellData.edit!)}
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Edit width={20} height={20} stroke={'#bbb'} strokeWidth={2.5} />
                  </div>
                </div>
              ) : null}

              {cellData.edit2 !== undefined ? (
                <div>
                  <div
                    onClick={() => onEdit2(cellData.edit2!, cellData.edit2_data!)}
                    style={{
                      marginTop: 10,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Edit width={20} height={20} stroke={'#bbb'} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tournament