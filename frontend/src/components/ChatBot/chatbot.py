import gradio as gr
from langchain.prompts import PromptTemplate
from langchain_community.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory
import os
from dotenv import load_dotenv

load_dotenv() 

api_key = os.getenv("OPENROUTER_API_KEY") 
#  Memory
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

#  Prompt template
template = """
You are a helpful food assistant. Only answer questions related to:
- nutritional facts
- recipes
- ingredients
- taste/flavor

You may also reply to greetings like "hi", "hello", "hey" in a friendly way.

If someone asks anything else, reply: "Sorry, I can only answer food-related questions."

Chat History:
{chat_history}

Question: {question}
Answer:
"""
prompt = PromptTemplate(input_variables=["question", "chat_history"], template=template)

# 🔗 Chain
llm = ChatOpenAI(
    model="openrouter/cypher-alpha:free",
    api_key=api_key,
    base_url="https://openrouter.ai/api/v1",
)
chain = LLMChain(prompt=prompt, llm=llm, memory=memory)

#  Chat handler
def chat(user_input, history):
    response = chain.invoke({"question": user_input})
    return response["text"]

#  UI
with gr.Blocks() as app:
    # Back button
    gr.HTML("""
        <div style="position: fixed; top: 15px; left: 15px; z-index: 1000;">
            <button 
                onclick="window.location.href='http://localhost:5173'" 
                style="
                    background-color: #ff5722;
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                "
            >⬅ Back</button>
        </div>
    """)

    #  DO NOT CALL `.render()` HERE
    gr.ChatInterface(
        fn=chat,
        title="🍲 Food Assistant with Memory",
        description="Ask about food, nutrition, or recipes. It remembers previous questions!",
        examples=[
            "What are the ingredients in khichdi?",
            "How many calories are in mango?",
            "hello",
        ]
    )

#  Launch
app.launch(share=True)
