import { Component } from "react";
import './SignUp.css'
import axios from "axios";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: "",
          password: "",
          passwordCheck: "",
          name: "",
          email: "",
          domain: ""
        };
      }

    onChangeID = (e) => {
        this.setState({
            id : e.target.value
        })
        
        console.log(this.state.id);
    }

    onChangePassword = (e) => {
        this.setState({
            password : e.target.value
        })
        
        console.log(this.state.password);
    }

    onChangePasswordCheck = (e) => {
        this.setState({
            passwordCheck : e.target.value
        })
        
        console.log(this.state.passwordCheck);
    }

    onChangeName = (e) => {
        this.setState({
            name : e.target.value
        })
        console.log(this.state.name);
    }

    onChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
        
        console.log(this.state.email);
    }

    onChangeDomain = (e) => {
        this.setState({
            domain : e.target.value
        })
        
        console.log(this.state.domain);
    }

    onChangeDomainList = (e) => {
        console.log(this.state.domain);
        if (e.target.value == "직접입력"){
            document.getElementById("domain").value ="";
            console.log(document.getElementById('domain').value);
        }
        else{
            document.getElementById("domain").value = e.target.value;
            document.getElementById("domain").setAttribute( 'disabled', true);
            console.log(document.getElementById('domain').value);
        }
    }

    // onClickButton = async () => {
    //     await axios.get("http://localhost:5000/SignUp").then((res) => console.log(res.data.test))
    // }

    callAcountApi = async () => {
        await axios.post('http://localhost:5000/SignUp', {
        })
        .then( response => {
            try {
                this.setState({ id : this.state.id });
                this.setState({ password: this.state.password });
                this.setState({ passwordCheck: this.state.passwordCheck });
                this.setState({ name: this.state.name });
                this.setState({ email: this.state.email });
                this.setState({ domain: this.state.domain });
                console.log("zz");
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.');
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    }

    render() {
        
        return (
            <div className="SignUp">
                <form name = "singup" method = "post" onSubmit = {this.callAcountApi()}>
                <table border = "1">
                    <tr>
                        <td>ID : </td>
                        <td>
                            <input
                                type = "text"
                                name ="id"
                                placeholder = "아이디를 입력하세요."
                                onChange={(e) => {this.onChangeID(e)}}
                            />
                        </td>
                        <td>
                          <button type = "button">중복확인</button>
                        </td>
                    </tr>
                    <tr>
                        <td>PW : </td>
                        <td>
                            <input
                                type = "password"
                                placeholder = "비밀번호를 입력하세요."
                                onChange={(e) => {this.onChangePassword(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>PW Again : </td>
                        <td>
                            <input
                                type = "password"
                                placeholder = "비밀번호를 다시 입력하세요."
                                onChange={(e) => {this.onChangePasswordCheck(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Name : </td>
                        <td>
                            <input
                                type = "text"
                                placeholder = "이름을 입력하세요."
                                onChange={(e) => {this.onChangeName(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email : </td>
                        <td>
                            <input
                                type = "text"
                                placeholder = "이메일"
                                onChange={(e) => {this.onChangeEmail(e)}}
                            />
                            @
                            <input
                                id = "domain"
                                type = "text"
                                placeholder = "도메인"
                                onChange={(e) => {this.onChangeDomain(e)}}
                            />
                            <select onChange = {(e) =>{this.onChangeDomainList(e)}}>
                              <option>직접입력</option>
                              <option>naver.com</option>
                              <option>gmail.com</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan ="2">
                            <button type = "submit">가입하기</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan = "2">
                            <a href = "#">아직 회원이 아니신가요?</a>
                        </td>
                    </tr>
                </table>
                </form>
            </div>
        );
    }
}

// export default SignUp;

// import React, { useState } from "react";
// import './SignUp.css';

// const Signup = () => {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordCheck, setPasswordCheck] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [domain, setDomain] = useState("");

//   const onSubmit = () => {};

//   const onChangeId = e => {
//     setId(e.target.value);
//   };

//   const onChangeName = e => {
//     setName(e.target.value);
//   };

//   const onChangePassword = e => {
//     setPassword(e.target.value);
//   };

//   const onChangePasswordCheck = e => {
//     setPasswordCheck(e.target.value);
//   };

//   const onChangeEmail = e => {
//     setEmail(e.target.value);
//   };

//   const onChangeDomain = e =>{
//       setDomain(e.target.value);
//   };

//   return (
//     <>
//       <head>
//         <title>회원가입</title>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css"
//         />
//       </head>
//         <form onSubmit={onSubmit} style={{ padding: 10 }}>
//           <div>
//             <label htmlFor="user-id">아이디</label>
//             <br />
//             <input name="user-id" value={id} required onChange={onChangeId} />
//           </div>
//           <div>
//             <label htmlFor="user-name">이름</label>
//             <br />
//             <input
//               name="user-name"
//               value={name}
//               required
//               onChange={onChangeName}
//             />
//           </div>
//           <div>
//             <label htmlFor="user-password">비밀번호</label>
//             <br />
//             <input
//               name="user-password"
//               type="password"
//               value={password}
//               required
//               onChange={onChangePassword}
//             />
//           </div>
//           <div>
//             <label htmlFor="user-password-check">비밀번호체크</label>
//             <br />
//             <input
//               name="user-password-check"
//               type="password"
//               value={passwordCheck}
//               required
//               onChange={onChangePasswordCheck}
//             />
//           </div>
//           <div>
//             <label htmlFor="user-email">이메일</label>
//             <br />
//             <input
//               name="user-email"
//               value={email}
//               required
//               onChange={onChangeEmail}
//             />@
//             <inputre
//                 name = "user-domain"
//                 value ={domain}
//                 required
//                 onChange = {onChangeDomain}/>
//           </div>
//           <div>
//             <button type="primary">가입하기</button>{" "}
//             {/* // button type="submit"하려면 htmlType="submit"라고해야함 */}
//           </div>
//         </form>
//     </>
//   );
// };

export default SignUp;