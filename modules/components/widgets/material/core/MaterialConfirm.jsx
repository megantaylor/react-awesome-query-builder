import React from "react";
import { useConfirm } from "material-ui-confirm";

const Confirm = ({onOk, okText, okType, onCancel, cancelText, title}) => {
  const confirm = useConfirm();

  React.useEffect( () => { 
    confirm({title:title, confirmationText:okText, cancellationText:cancelText}).then(() => {console.log("Deleted."); }).catch(() => { console.log("Deletion cancelled."); });}, []
  );
};

export default (options) => { 

  return <Confirm {...options}/>;

};
