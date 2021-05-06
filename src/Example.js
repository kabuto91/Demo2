import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function  Index(){
    useEffect(()=>{
        console.log('useEffect=>老弟，你来啦！Index页面')
        return ()=>{
            console.log('useEffect=>老弟，你走啦！Index页面')
        }
    },[])
    return <h2>JSPang.com</h2>
}


function  List(){
    useEffect(()=>{
        console.log('useEffect=>老弟，你来啦！List页面')
        return ()=>{
            console.log('useEffect=>老弟，你走啦！List页面')
        }
    },[])
    return <h2>ListPage</h2>
}


function Example(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('======================')
        }
    },[count])

    return (
        <div>
            <p>你已经点击了：{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list/' component={List} />
            </Router>
        </div>
    )
}

export default Example;