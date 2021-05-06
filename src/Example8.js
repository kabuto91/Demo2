import React, {useRef, useState, useEffect} from 'react';

function Example8(){
    const InputEl = useRef(null)

    const onButtonClick = () =>{
        InputEl.current.value="hello,JSPang"
        console.log(InputEl)
    }

    const [text, setText] = useState('JSPang')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text;
        console.log(textRef)
    })

    return (
        <div>
            <input ref={InputEl} type='text' />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br />
            <br />
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </div>
    )
}

export default Example8;