import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession, } from "next-auth/react"
import Head from "next/head";
import Image from "next/image";



const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <br />
      {session?.user ?
        <>
          <Image src={session?.user?.image} alt="profile" width={150} height={150} style={{ borderRadius: '50%' }} />
          <br />
          <h2>{session?.user?.name} </h2>
          <p>{session?.user?.email} </p>
        </>
        :
        <Avatar size={64} icon={<UserOutlined />} />
      }


    </div>
  );
};

export default ProfilePage;
