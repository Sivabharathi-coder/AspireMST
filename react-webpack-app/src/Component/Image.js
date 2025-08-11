import React from "react";

const user={
    name:'Siva Bharathi',
    imageUrl:'https://picsum.photos/id/237/200/300',
    imageSize:90
}

export default function Profile(){
    return(
        <>
        <h1>{user.name}</h1>
        <img 
         src={user.imageUrl}
         className="avatar"
         alt={'Photo of' + user.name}
         style={{
            width:user.imageSize,
            height:user.imageSize
         }}
        />
        </>
    )
}