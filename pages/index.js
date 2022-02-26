import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import HomePage from '../components/home/HomePage'
import { getAuthAction, setModalAction } from '../store/actions/root.actions'
import { getAuthThunk } from '../store/thunk/root.thunk'
import withRedux from 'next-redux-wrapper';
import wrapperStore from '../store/store'

const Home = () => {
  const dispatch = useDispatch()
  const isModal = useSelector((state) => state.root.isModal)

  const setModal = (isModal) => dispatch(setModalAction(isModal))

  return (
    <HomePage isModal={isModal} setModal={setModal} />
  )
}

export default Home