import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {ContentInfo, ContentLink, Content, ContentReply} from "./InfoAccount.elements"

export const InfoAccount = () => {

    const user = useSelector((state) => state.login?.currentUser)

    return (
        <>
            <Content>
                <ContentInfo>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputHo">Họ</label>
                                <input type="text" class="form-control" id="inputHo" placeholder="Họ....." />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputTen">Tên</label>
                                <input type="text" class="form-control" id="inputTen" placeholder="Tên...." />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPhone">Phone</label>
                                <input type="text" class="form-control" id="inputPhone" placeholder="Phone...." />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                    </form>

                    <from>
                        <div class="form-row row-2-pass inputPassWord">
                            <h2>Thay đổi mật khẩu</h2>
                                <div class="form-group">
                                    <label for="inputPassWord">Mật khẩu</label>
                                    <input type="email" class="form-control " id="inputPassWord" placeholder="......" />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword4">Mật khẩu mới</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="....." />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Nhập lại mật khẩu mới</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="......" />
                                </div>
                            </div>
                    </from>
                    <button type="submit" class="btn btn-primary">Lưu Thay Đổi </button>
                </ContentInfo>
                <ContentLink>
                    <p>Students are bombarded with several tasks every day, 
                        but luckily, Paper Writing Services is 
                        <NavLink className="InfoLink" to="https://payforessay.net/"> https://payforessay.net/ </NavLink>
                        always there to aid them along. If you’re  
                        <NavLink className="InfoLink" to="https://www.masterpapers.com/"> https://www.masterpapers.com/ </NavLink> 
                        looking for an authority that can answer the call of your dearly 
                        anxious student, this is here to help. With homework and school 
                        deadlines are getting closer, you’re probably also feeling apprehensive
                        about homework being more www.masterpapers.com difficult. 
                        Whether you decide to take on the project yourself or locate a 
                        ready-made essay assistance service, you will quickly find that 
                        essay writing is not essay writer as difficult as you may have thought.
                        Paper writing services provide essay help and guidance in the method 
                        of picking subjects and writing a composition. In addition to guiding 
                        you through the writing process, these services may also provide you 
                        with essay templates to work with,<NavLink className="InfoLink" to=""> essay writer</NavLink> essay examples, 
                        and many other useful aspects of essay writing.</p>

                    <p>When you will need a fast and effortless way to gather essay writing services 
                        a fantastic essay, think about hiring an online essay author. 
                        Essay authors have obtained over the net and all it takes is 
                        the input and they will turn your rough draft into a polished 
                        piece of writing that gets high marks from schools and employers. 
                        There are a few things you should look for when searching for an 
                        essay ghostwriter. Here are a Few of Those things:</p>
                </ContentLink>

                <ContentReply>
                    <div className='form-reply'>
                        <h2>Trả lời</h2>

                        <p>Đã đang nhập bằng tài khoản <span>{user}</span></p>

                        <span>Bình Luận</span>

                        <div className='input'>
                            <input type="text" class="form-control" id="inputCmt" placeholder="" />
                        </div>

                        <button type="submit" class="btn btn-primary">Phản hồi</button>
                    </div>
                </ContentReply>
            </Content>
        </>
    )
}

export default InfoAccount
