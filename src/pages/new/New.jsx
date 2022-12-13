import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import './new.scss'
import { useState } from 'react'

const New = ({inputs, title}) => {

    const [file, setFile] = useState("");
    // console.log(file)
    return (
        <div className='new'>
            <Sidebar/>
            <div className="new-container">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>Upload image: <DriveFolderUploadOutlined className='icon-upload'/></label>
                                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}
                            
                            <button className="create">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default New