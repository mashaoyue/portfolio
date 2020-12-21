import React from "react";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './styles/User_bar.css'

const urls = [
    {
        "id": "ava0",
        "url": '/images/ava/ava1.png'
    },
    {
        "id": "ava1",
        "url": '/images/ava/ava2.jpg'
    },
    {
        "id": "ava2",
        "url": '/images/ava/ava3.png'
    },
]


const UserBar = ()=>{
    const [openWechat, setOpenWechat] = React.useState(false);
    const [avaScrollBlock, setAvaScrollBlock] = React.useState(false);
    const [showAvaId, setShowAvaId] = React.useState(0);
    const [imgUrl, setImgUrl] = React.useState(urls);
    const calendarContainerRef = React.useRef<HTMLDivElement>(null);
    // const []
    const [refill, setRefill] = React.useState(false);
    const avaScrollTimerId = React.useRef<NodeJS.Timeout|null>(null);
    const handleOpenWechat = ()=>{
        setOpenWechat(true);
    }

    const handleCloseWechat = ()=>{
        setOpenWechat(false);
    }

    // setInterval(()=>{
    //     const element = document.getElementById(showAvaId.toString());
    //     if(element){
    //         let topPos = element.offsetTop;
    //         if(calendarContainerRef.current){
    //             calendarContainerRef.current.scrollTo({behavior:"smooth", top:topPos});
    //         }
    //     }
    //     setShowAvaId(showAvaId + 1);
    //     console.log(showAvaId);
        
    // }, 5000)

    const handleOnClickScroll = ()=>{
        setAvaScrollBlock(true);
    }

    React.useEffect(()=>{
        avaScrollTimerId.current = setTimeout(()=>{setAvaScrollBlock(true)},8000)
        return ()=>{
            if(avaScrollTimerId.current)
            clearInterval(avaScrollTimerId.current);
        };
    }, [])

    // React.useEffect(()=>{
    //     prevScrollY.current = setInterval(()=>{
    //         setAvaScrollBlock(true);
    //     }, 8000);
    //     return ()=>{clearInterval(scrollIntervalId)};
    // },[])

    React.useEffect(()=>{
        if(avaScrollBlock){
            setShowAvaId(c=>c>1?0:c+1);
            setTimeout(()=>{
                setAvaScrollBlock(false);
            }, 1200)
        }
      
    },[avaScrollBlock])

    React.useEffect(
        ()=>{
            const _t = ()=>{
                const element = document.getElementById("ava" + showAvaId.toString());
                if(element){
                    let topPos = element.offsetTop;
                    if(calendarContainerRef.current){
                        calendarContainerRef.current.scrollTo({behavior:"smooth", top:topPos});
                        if("ava" + showAvaId.toString() === imgUrl[imgUrl.length-1].id){
                            setTimeout(()=>{
                                // if(calendarContainerRef.current)
                                // calendarContainerRef.current.scrollTo({top:0});
                                setRefill(true);
                            }, 500);
                            
                            // setImgUrl(tmpUrls);
                        }
                    }
                }
                if(avaScrollTimerId.current){
                    clearInterval(avaScrollTimerId.current);
                    avaScrollTimerId.current = setTimeout(()=>{setAvaScrollBlock(true)},8000);   
                }
            }
            _t();
            
        }

    ,[showAvaId, imgUrl])

    React.useEffect(()=>{
        if(refill){
            let tmpUrls = JSON.parse(JSON.stringify(imgUrl));
            // tmpUrls.shift();
            // tmpUrls.shift();
            // setImgUrl(tmpUrls);
            let toTop = tmpUrls.pop();
            // let toTop = tmpUrls.pop();
            if(toTop){
                tmpUrls.unshift(toTop)
                setImgUrl(tmpUrls);
            }
            if(calendarContainerRef.current){
                calendarContainerRef.current.scrollTo({top:0})
            };
            setRefill(false);
        }
    },[refill])


    return(
        <div className="user_container">
            {/* <button onClick={handleOnClickScroll}>click</button> */}
            <div className="next_ava_button" onClick={handleOnClickScroll}></div>
            <div className="user_img_container">
                <div ref={calendarContainerRef} className="user_img_div">
                    {imgUrl.map((item, index)=>(
                        // <img id={item.id} key={item.id} className="user_img" src={item.url} alt="avatar"/>
                        <div id={item.id} key={item.id} className="user_img" style={{backgroundImage: `url('${item.url}')`}}></div>
                    ))}
                </div>
                
                <div className="icon_container">
                    <a href="https://twitter.com/ralph_ma_" target="_blank" rel="noreferrer"><img style={{borderRadius: "5px"}} src={'/images/icons/twitter.svg'} alt="twitter"/></a>
                    <a href="mailto:ralphma9@gmail.com"><img src={'/images/icons/gmail.png'} alt="gmail"/></a>
                    <img onClick={handleOpenWechat} src={'/images/icons/Wechat.png'} alt="wechat"/>
                    <a href="https://www.linkedin.com/in/ralph-ma" target="_blank" rel="noreferrer"><img src={'/images/icons/linkedin.png'} alt="linkedin"/></a>         
                </div>
            </div>
            
            <div className="self_intr">
                I am a passionate Full­stack developer with a love of beautiful, performant, and secure web applications. 
            </div>

            <div className="self_intr">
                You can email me with questions, feedback, or work inquiries at <a href={"mailto:ralphma9@gmail.com"}>ralphma9@gmail.com</a>.
            </div>

            <Dialog onClose={handleCloseWechat} open={openWechat}>
                <MuiDialogTitle style={{padding:"0px 5px"}} id="wechat-dialog">
                    <div className="dialog_title_panel">
                        <IconButton aria-label="close" className="wechatDialogCloseIcon" onClick={handleCloseWechat}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="dialog_title_wechat_id">
                        <strong>Wechat ID:</strong>&nbsp;primer12450
                    </div>
                </MuiDialogTitle>
                <MuiDialogContent>
                    <img className="dialog_img" src={'/images/wechat_img.jpg'} alt="wechat_img"/>
                </MuiDialogContent>
            </Dialog>
        </div>
    );
}

export default UserBar;