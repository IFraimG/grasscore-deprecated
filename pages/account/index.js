import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthAction } from "../../store/actions/root.actions";

const Account = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
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

Account.getInitialProps = async (ctx) => {
  const resJSON = await fetch("http://localhost:5000/hello/" + ctx.query.id, {method: 'POST'})
  let res = await resJSON.json()

  return { data: res }
}

export default Account

