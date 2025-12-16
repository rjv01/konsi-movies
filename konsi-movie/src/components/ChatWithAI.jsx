import axios from 'axios';
import { useState } from 'react'

export default function ChatWithAI({openModal}) {
    const [ques,setQues] = useState("");
    const [ans,setAnswer] = useState("");
    const [loading,setLoading] = useState(false);

    const CallAI = async(e) => {
        e.preventDefault();
        if(!ques.trim()){
            alert("Empty fields");
            return ;
        }
        try {
            setLoading(true);
            // const token = localStorage.getItem("token");
            console.log("ques from frontend: ",ques);
            const response = await axios.post(`
                ${import.meta.env.VITE_BACKEND_URL}/movieai/api/sendques`,
                { ques },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // Authorization: `Bearer ${token}`, // ✅ Include token
                    }
                }
            );
            setAnswer(response.data.output);
            setQues("");
            alert("ques sent!!")
        } catch (error) {
            console.log(error.message);
            alert("error in sending ques!!")
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col h-[450px] w-[400px] border-2 bg-black/50 rounded-2xl m-4'>
            <h1 className='text-center mt-5 text-yellow-500 animate-pulse'>WORKING ON IT</h1>
            <div className='flex bg-blue-100 h-44 w-[370px] p-4 m-4 rounded-2xl'>
                {
                    loading ? (
                        <p className='animate-pulse text-red-500 font-bold'>Loading...</p>
                    ) : (
                        <div className='flex overflow-y-clip'>
                            <pre>{ans}</pre>
                        </div>
                    )
                }
            </div>
            <form 
                onSubmit={CallAI}
                className='flex flex-col'
            >
                <textarea
                    value={ques}
                    maxLength={500}
                    onChange={(e)=>setQues(e.target.value)}
                    className='bg-yellow-500 h-18 w-[370px] p-4 m-4 rounded-2xl text-white placeholder:text-white'
                    placeholder='enter your prompt'
                ></textarea>
                <button 
                    className='text-green-500 bg-green-700 p-4 m-4 rounded-2xl'
                    type='submit'
                >Send</button>
                <p className='text-red-500 font-bold'>Movie API for movie recommendation</p>
            </form>
        </div>
    );
}