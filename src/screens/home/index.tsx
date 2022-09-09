import React from 'react';
import { Col, Row } from 'antd';
import { homePostsSelector } from 'store/selectors/posts';
import { useSelector, useDispatch } from 'react-redux';
import VerticalPostItem from 'components/VerticalPostItem';
import actions from 'store/actions';

interface Props {}
const Home : React.FC<Props> = () => {
  const posts = useSelector(homePostsSelector)
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    console.log('fetching.....')
    dispatch(actions.posts.getHomePosts())
  }

  return (
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
        {
          posts && posts.length > 0 && posts.map((post, index) => {
            return <VerticalPostItem key={index} post={post}></VerticalPostItem>
          })
        }
      </Col>
      <Col span={8}></Col>
    </Row>
  )
}

export default Home;