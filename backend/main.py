from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from rembg import remove
import io

app = FastAPI()

@app.post("/remove-bg/")
async def remove_bg(file: UploadFile = File(...)):
    input_data = await file.read()
    output = remove(input_data)
    return StreamingResponse(io.BytesIO(output), media_type="image/png")
