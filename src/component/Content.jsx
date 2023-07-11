import { useRef, useState } from "react";

    
    function Content() {
        const ref=useRef()
        const [content,setContent]= useState('')
        return (
            <div>
                <textarea ref={ref} className="form-control"></textarea><br></br>
                <button onClick={()=>setContent(ref.current.value)} className="btn btn-success">Print on P Tag</button>
                <p className="lead">{content}</p>
            </div>
        );
    }
    
    export default Content;

 