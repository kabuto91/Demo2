import React, {useState, useMemo} from 'react';

function Example7(){
    const [xiaohong, setXiaohong] = useState('小红在待客状态')
    const [zhiling, setZhiling] = useState('志玲在待客状态')

    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+'志玲向我们走来')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({name, children}){

    function changeXiaohong(){
        console.log('他来啦，他来啦，小红向我们走来啦');
        return name+',小红向我们走来啦'
    }

    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name]) 

    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7;