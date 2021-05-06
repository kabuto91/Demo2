import React, {useState} from 'react';

function Example2(){
    const [age, setAge] = useState(18);
    const [sex, setSex] = useState('男');
    const [work, setWork] = useState('前端程序员');
    return (
        <div>
            <p>JSPang今年：{age}岁</p>
            <p>JSPang性别：{sex}</p>
            <p>JSPang工作：{work}</p>
        </div>
    )
}

export default Example2;