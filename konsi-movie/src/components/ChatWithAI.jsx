import axios from "axios";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatWithAI({openModal,recommendMovies,onClose}) {
  const [ques, setQues] = useState("");
  const [ans, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (recommendMovies) {
      setAnswer(recommendMovies);
    }
  }, [recommendMovies]);

  const CallAI = async (e) => {
    e.preventDefault();
    if (!ques.trim() || loading) return;

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/movieai/api/sendques`,
        { ques },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAnswer(response.data.output);
      setQues("");
    } catch (error) {
      console.error(error);
      alert("Error in sending question");
    } finally {
      setLoading(false);
    }
  };

  if (!openModal) return null;

  return (
    <div className="fixed top-20 left-6 z-50 flex flex-col h-[460px] w-[400px] border-2 border-gray-600 bg-black/80 backdrop-blur rounded-2xl shadow-2xl">
      <div className="flex justify-between items-center px-4 pt-4">
        <h1 className="text-yellow-400 font-bold p-3">
          AI Movie Assistant
        </h1>

        <button
          onClick={onClose}
          className="text-2xl font-bold text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>

      <div className="bg-blue-100 h-[350px] w-[370px] p-4 m-3 rounded-2xl overflow-y-auto overflow-x-hidden text-sm">
        {loading ? (
          <p className="animate-pulse text-red-500 font-bold">
            Loading...
          </p>
        ) : (
            <div className="whitespace-pre-wrap break-words text-black text-center">
            {/* <Markdown remarkPlugins={[remarkGfm]} >
                {ans || "Click AI on a movie for recommendation based on that movie🎬"}
            </Markdown> */}
                <pre>
                    {ans || "Ask something or click AI on a movie 🎬"}
                </pre>
            </div>
        )}
      </div>

      {/* <form onSubmit={CallAI} className="flex flex-col">
        <textarea
          value={ques}
          maxLength={500}
          onChange={(e) => setQues(e.target.value)}
          className="bg-yellow-500 w-[370px] p-4 m-4 rounded-2xl text-white placeholder:text-white resize-none"
          placeholder="Enter your prompt..."
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-700 text-green-300 p-3 mx-4 rounded-2xl hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

        <p className="text-red-500 text-sm font-bold text-center mt-2">
          Movie AI Recommendation
        </p>
      </form> */}
    </div>
  );
}
