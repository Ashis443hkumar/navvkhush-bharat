import React from "react";

export default function ModelBox(props) {
  let ListStyle = {
    display:"block",
    backgroundColor: "rgba(0,0,0,0.8)"
  }
  return (
    <div>
       <div class="modal show fade" tabindex="-1" style={ListStyle}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{props.title}</h5>
              <button type="button" class="btn-close " onClick={props.hide}></button>
            </div>
            <div class="modal-body">
              <img src={props.img} alt="" class="w-100" />
              <p>{props.desc}</p>
            </div>
          
          </div>
        </div>
      </div>

    </div>
  );
}
