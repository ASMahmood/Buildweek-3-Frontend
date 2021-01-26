import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/ContactInfo.css'

import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { MdCake } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';



const ContactInfo = ({ userInfo, otherPeople }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link onClick={handleShow} style={{ fontWeight: 600, textTransform: 'capitalize' }}>
        Contact Info
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{userInfo.name + ' ' + userInfo.surname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-between inner-body'>
            <h3>Contact Info</h3>
            {!otherPeople &&
              <Link className='pencil d-flex align-items-center'>
                <BiPencil />
              </Link>
            }
          </div>
          <div className='inner-body'>
            <div className='d-flex align-items-center'>
              <AiFillLinkedin />
              <b> {!otherPeople ? <>Your</> : <>LinkedIn</>} Profile</b>
            </div>
            <div className='info'>
              <Link>linkedin.com/in/{userInfo.name + '-' + userInfo.surname + '-' + userInfo._id}</Link>
            </div>
          </div>
          <div className='inner-body'>
            <div className='d-flex align-items-center'>
              <FiPhone />
              <b> Phone</b>
            </div>
            <div className='info'>
              <span>phone number</span>
            </div>
          </div>
          <div className='inner-body'>
            <div className='d-flex align-items-center'>
              <AiOutlineMail />
              <b> Email</b>
            </div>
            <div className='info'>
              <Link>{userInfo.email}</Link>
            </div>
          </div>
          <div className='inner-body'>
            <div className='d-flex align-items-center'>
              <MdCake />
              <b> Birthday</b>

            </div>
            <div className='info'>
              <p>Users birthday</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}



export default ContactInfo