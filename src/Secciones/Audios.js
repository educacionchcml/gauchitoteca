import React from "react";

export default function Audios() {
    const data = `<iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fblahzayvanguard%2Fblas%C3%A9-vanguard-yanayi-2-031%2F" frameborder="0" ></iframe>`
    return (
        <div dangerouslySetInnerHTML={{__html: data}} >
            
        </div>
    )
}

