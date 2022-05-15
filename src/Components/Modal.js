import React from 'react';

const Modal = () => {
    return (
        <> 
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

            
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Please fill the field</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                       
                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal