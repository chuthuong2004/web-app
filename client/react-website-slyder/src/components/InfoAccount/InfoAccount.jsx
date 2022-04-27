import React from 'react'
import {Common} from "./Infocommon/common"
import {ContentInfo, Content} from "./InfoAccount.elements"
import {useSelector} from "react-redux"

export const InfoAccount = () => {

    const user = useSelector((state) => state.auth.login?.currentUser)

    return (
        <>
            <Content>
                <ContentInfo>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" value={user.email} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="inputUser" value={user.username}/>
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
                <Common />
            </Content>
        </>
    )
}

export default InfoAccount
