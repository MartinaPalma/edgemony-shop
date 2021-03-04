import React from 'react'
import './Modal.css'


  
function Modal({ isOpen, onClose, product }) {
  // const [ productInModal, setProductInModal ] = useState(null)
  // const [ modalIsOpen, setModalIsOpen ] = useState(false)

  // function openProductModal(product) {
  //   console.log(product)
  //   setProductInModal(product)
  //   setModalIsOpen(true)
  // }

  // function closeModal() {
  //   setModalIsOpen(false)
  //   setTimeout(() => {
  //     setProductInModal(null)
  //   }, 500)
  // }

  // useEffect(() => {
  //   if (modalIsOpen) {
  //     document.body.style.height = `100vh`
  //     document.body.style.overflow = `hidden`
  //   } else {
  //     document.body.style.height = ``
  //     document.body.style.overflow = ``
  //   }
  // }, [ modalIsOpen ])

    return isOpen && ( 
    <div className='ProductModal'>
       <div className="overlay" onClick={() => onClose()}></div>
      <div className="modal-content">
       <button type="button" className="BtnOnClose" onClick={() => onClose()} >x</button>
      <img src={product.image}  alt={product.title} />
      <div className="content">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>€{product.price}</span>
    </div>
    </div>
    </div>
    );
}
export default Modal