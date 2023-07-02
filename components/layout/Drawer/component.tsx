import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import { Stack, Box } from '@mui/material';
import SimpleBar from './SimpleBar';
import SideBar from './sidebar';
import Link from 'next/link';
import { dataType } from '@/pages/edit';

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }: { theme: any; open: boolean }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0)
}));

export const DrawerHeader = ({ open }: { open: boolean }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Link href={"/"} style={{textDecoration: "none"}}>Tournament</Link>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export const DrawerContent = ({ open, page, setPage, onClose, sidebarData } : { open:boolean, page: null | string, setPage: Function, onClose: () => void, sidebarData: dataType | null }) => (
  <SimpleBar>
    <SideBar drawerOpen={open} page={page} setPage={setPage} onClose={onClose} sidebarData={sidebarData} />
  </SimpleBar>
);

export default DrawerContent;
