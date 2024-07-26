import React, { useEffect, useState } from 'react';
import { COLOR_OPTION, SIZE_OPTION } from '../../constants/poroductOptions';
import axios from 'axios';


function PostPage2(props) {
    const [product, setProduct] = useState({
        productName:"",
        price:"",
        size:"",
        color:""
    });

 
    const [sizeOptions, setSizeOptions] = useState([]);
    const [colorOptions, setColorOptions] = useState([]);

    useEffect(() => {
        const getSizes = async () => {
            const response = await axios.get("http://localhost:8080/api/v1/sizes") 
            setSizeOptions(response.data);
            setProduct(product => ({
                ...product,
                sizeId: response.data[0].sizeId
            }));
        }

        const getColors = async () => {
            const response = await axios.get("http://localhost:8080/api/v1/colors") 
            setColorOptions(response.data);
            setProduct(product => ({
                ...product,
                colorId: response.data[0].colorId
            }));
        }

        getSizes();
        getColors();
    },[]);


    const handleInputChange = (e) => {
        setProduct(product =>{
            return{
                ...product,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/product", product);
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    const handleSubmitClick2 = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/product", product);
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <>
                <header>
                    <h1>비동기 데이터 통신(POST2)</h1>
                </header>
                <main>
                    <h3>상품등록</h3>
                    <p>
                        <label htmlFor="">상품명</label>
                        <input type="text" 
                        name="productName"
                        onChange={handleInputChange}/>
                    </p>
                    <p>
                        <label htmlFor="">가격</label>
                        <input type="text" 
                        name="price"
                        onChange={handleInputChange}/>
                    </p>
                    <p>
                        <label htmlFor="">사이즈</label>
                        <select name="sizeId"
                        onChange={handleInputChange} value={product.sizeId}>
                        {sizeOptions.map(size => 
                        <option key={size.sizeId} value={size.sizeId}>{size.sizeName}</option>)}
                        </select>
                    </p>
                    <p>
                        <label htmlFor="">색상</label>
                        <select name="colorId"
                        onChange={handleInputChange} value={product.colorId}>
                        {colorOptions.map(color => <option key={color.colorId} value={color.colorId}>{color.colorName}</option>)}
                        </select>
                    </p>
                    <p>
                        <button onClick={handleSubmitClick}>등록하기</button>
                    </p>
                </main>
            </>
        </div>
    );
}

export default PostPage2;