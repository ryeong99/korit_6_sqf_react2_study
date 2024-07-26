import React from 'react';

function PromisePage(props) {
    const loop = (name) => {
        const random = Math.floor(Math.random() * 100)+1;
        for(let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`);
        }
    }

    const testPromise = () => {
        return new Promise((resolve, reject) => {
            loop("test1");
            resolve("test1 반복완료");
        });
    }
    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("test2");
            resolve("test2 반복완료");
        });
    }
    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("test3");
            resolve("test3 반복완료");
        });
    }
    /*******************************************************/
    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4")
            if(num === 0) {
                reject("test4 오류");
                return;
            }
            resolve("test4 성공")
        });
    }
    const testPromise5 = async (num) => {
        console.log("test5") 
        if(num === 0) {
            throw new Error("test5 오류");
            }
        return("test5 성공");
    }


    const handleClick1 = () => {
        testPromise().then(r=> {
            console.log(r);
            testPromise2().then(r => {
                console.log(r);
                testPromise3().then(r=>console.log(r));
            });
        });
    }        
    // handleClick1,2 같은 버튼
    const handleClick2 = async () => {
        const r = await testPromise();
        console.log(r);
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }
    const handleClick3 = async () => {
        testPromise4(3)
        .then( r => {
            console.log(r);
        })
        .catch(e => {
            console.error(e);
        });
        testPromise5(3)
        .then( r => {
            console.log(r);
        })
        .catch(e => {
            console.error(e);
        });
    }
    const handleClick4 = async () => {
        try {
            const r = await testPromise4(3);
            console.log(r);
        } catch(e) {
            console.error(e);
        }
        
        try {
            const r2 = await testPromise5(3);
            console.log(r2);
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>    
            <button onClick={handleClick2}>버튼2</button>    
            <button onClick={handleClick3}>버튼3</button>    
            <button onClick={handleClick4}>버튼4</button>    
        </div>
    );
}

export default PromisePage;