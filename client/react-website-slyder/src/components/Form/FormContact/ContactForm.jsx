import React from 'react'
import {
  ContainerContact,
  ContactContent,
  ContactForm
} from "./Contact.element"
import {MdAddLocationAlt} from "react-icons/md"
import {GiRotaryPhone} from "react-icons/gi"
import {HiOutlineMailOpen} from "react-icons/hi"

const Contact = () => {
  return (
    <>
      <ContainerContact>
        <ContactContent>
          <div className='content_title_img'>
            <div className='content_tile_pos'>
              <p>Liên hệ</p>
            </div>
          </div>
        </ContactContent>

        <ContactForm>
          <div className='form-contact'>
            <div className='form-left'>
              <h2>Liên hệ với chúng tôi</h2>
              <form className='form-left-up'> 
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" />
                  </div>
                </div>
              </form>
              <form className='form-left-down'>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" />
                  </div>
                </div>
              </form>
              <form className='form-left-down'>
                <input type="text" className='input-mess' placeholder='Lời nhắn' />
              </form>

              <button className='form-left-down button-send'>Gửi</button>
            </div>
            <div className='form-right'>
              <ul>
                <li><MdAddLocationAlt /> Quận Bình Thạnh</li>
                <li><GiRotaryPhone /> 0979523576</li>
                <li><HiOutlineMailOpen /> anhtuan28023008@gmail.com</li>
              </ul>
            </div>
          </div>
        </ContactForm>
      </ContainerContact>
    </>
  )
}

export default Contact