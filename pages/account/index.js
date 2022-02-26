import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthAction } from "../../store/actions/root.actions";

const Account = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(props.data);
    if (props.data != null) {
      dispatch(setAuthAction(props.data))
    }
  }, [])

  return (
    <div>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem esse temporibus nihil consequuntur eum? Aliquam iusto sint tenetur eum a laborum? At quibusdam aliquid ipsam tenetur sint. Aliquid, dolorum nostrum.</h1>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  if (ctx.query?.id != null) {
    const resJSON = await fetch(`http://localhost:5000/hello/${ctx.query.id}?token=${ctx.query.access_token}`, {method: 'POST'})
    let res = await resJSON.json()

    return {redirect: { destination: "/account", permament: false }, props: { data: res }} 
  } else if (ctx.req.cookies?.dsUserID != null && ctx.req.cookies?.token != null) {
    const resJSON = await fetch(`http://localhost:5000/hello/${ctx.req.cookies.dsUserID}?token=${ctx.req.cookies.token}`, {method: 'POST'})
    let res = await resJSON.json()

    return {props: { data: res }}
  } else return {redirect: { destination: "/", permament: false }}
}

export default Account