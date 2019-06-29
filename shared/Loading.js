import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading() {
  return (
    <div style={{textAlign:'center'}}>
      <CircularProgress size={100} style={{marginTop:100}} color="inherit" />
    </div>
  );
}

export default Loading;
