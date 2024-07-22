import React from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function PostPage(props) {
    const schoolNameInput = useInput();
    const departmentInput = useInput();
    const gradeInput = useInput();
    const nameInput = useInput();

    const schoolInput = useInput();
    const phoneNumberInput = useInput();
    const adressInput = useInput();
    const namesInput = useInput();


    const handleSubmit = () => {
        const student = {
            schoolName: schoolNameInput.value,
            department: departmentInput.value,
            grade: gradeInput.value,
            name: nameInput.value
        }
        // fetch("http://localhost:8080/basic/student", {
        //     method: "post",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(student)
        // }).then(response => {
        //     response.json().then(responseData => {
        //         console.log(responseData);
        //     })
        // });
        axios.post("http://localhost:8080/basic/student", student)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const handleTeacherSubmit = () => {
        const teacher = {
            school: schoolInput.value,
            phoneNumber: phoneNumberInput.value,
            adress: adressInput.value,
            names: namesInput.value
        }

        axios.post("http://localhost:8080/basic/taecher", teacher)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST)</h1>
            </header>
            <main>
                <h3>학생정보</h3>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text"
                        onChange={schoolNameInput.onChange}
                        value={schoolNameInput.value} />
                </p>
                <p>
                    <label htmlFor="">학과명: </label>
                    <input type="text"
                        onChange={departmentInput.onChange}
                        value={departmentInput.value} />
                </p>
                <p>
                    <label htmlFor="">학년: </label>
                    <input type="text"
                        onChange={gradeInput.onChange}
                        value={gradeInput.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text"
                        onChange={nameInput.onChange}
                        value={nameInput.value} />
                </p>
                <p>
                    <button onClick={handleSubmit}>전송</button>
                </p>
                <h3>선생님정보</h3>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text"
                        onChange={schoolInput.onChange}
                        value={schoolInput.value} />
                </p>
                <p>
                    <label htmlFor="">연락처: </label>
                    <input type="text"
                        onChange={phoneNumberInput.onChange}
                        value={phoneNumberInput.value} />
                </p>
                <p>
                    <label htmlFor="">주소: </label>
                    <input type="text"
                        onChange={adressInput.onChange}
                        value={adressInput.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text"
                        onChange={namesInput.onChange}
                        value={namesInput.value} />
                </p>
                <p>
                    <button onClick={handleTeacherSubmit}>전송</button>
                </p>
            </main>
        </>
        
    );
}


export default PostPage;