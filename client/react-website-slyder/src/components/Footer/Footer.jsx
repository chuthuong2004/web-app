import React from 'react'
import { 
    FooterContainer, 
    FooterItems, 
    FooterLocation,
    FooterTime,
    FotterTitle,
    FooterLink,
    FooterInput,
    FooterSignout,
    FooterList,
    FotterIcon,
    FotterEnd,
    WebsiteRights
} from "./Footer.elements";
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {FaFacebookMessenger, FaTiktok} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiRotaryPhone} from 'react-icons/gi'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterItems>
                <FooterLocation>
                    <FotterTitle>Địa chỉ liên hệ</FotterTitle>
                    <FooterLink><GoLocation /> Quận Bình Thạnh</FooterLink>
                    <FooterLink><GiRotaryPhone /> 0979523576</FooterLink>
                </FooterLocation>

                <FooterTime>
                    <FotterTitle>Thời gian làm việc</FotterTitle>
                    <FooterLink>Thứ Hai - Thứ Sáu .... 8,00 đến 18:00</FooterLink>
                    <FooterLink>Thứ Bảy ............ 9.00 đến 21.00</FooterLink>
                    <FooterLink>Chủ nhật ............ 10:00 đến 21:00</FooterLink>
                </FooterTime>
            </FooterItems>

            <FooterList>
                <FotterTitle>Danh Mục</FotterTitle>
                <FooterLink>Tin khuyến mãi</FooterLink>
                <FooterLink>Tin tuyển dụng</FooterLink>
                <FooterLink>Chính sách đổi trả</FooterLink>
                <FooterLink>Chính sách vận chuyển</FooterLink>
                <FooterLink>Hướng dẫn mua hàng</FooterLink>
            </FooterList>

            <FooterSignout>
                <FotterTitle>Đăng kí</FotterTitle>
                <FooterLink>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</FooterLink>
                <FooterInput>
                    <input name='email' type='email' placeholder='Your Email.......'/>
                    <button>Đăng Kí</button>
                </FooterInput>
                <FotterIcon>
                    <ul>
                        <li><BsFacebook /></li>
                        <li><FaFacebookMessenger /></li>
                        <li><GrYoutube /></li>
                        <li><FaTiktok /></li>
                        <li><BsInstagram /></li>
                        <li><AiFillTwitterCircle /></li>
                    </ul>
                </FotterIcon>
            </FooterSignout>
        </FooterContainer>
        <FotterEnd>
            <WebsiteRights>© L T H Store VIỆT NAM 2022 </WebsiteRights>
        </FotterEnd>
    </>
  )
}

export default Footer