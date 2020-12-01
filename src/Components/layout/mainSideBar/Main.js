import React from 'react';
// import MainNavbar from "./MainNavbar";
import PersistentDrawerLeft from "./NavDrawer";
import { makeStyles, useTheme } from '@material-ui/core/styles';


export default function MainScreen() {

  return (
    <div >
      <PersistentDrawerLeft/>
    </div>
  );
}
