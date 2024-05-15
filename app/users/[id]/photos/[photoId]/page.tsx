import React from "react";

type props = {
  params: { id: number; photoId: number };
};

const UserPhoto = ({ params: { id, photoId } }: props) => {
  return (
    <div>
      UserPhoto id -{id} photoId - {photoId}
    </div>
  );
};

export default UserPhoto;
