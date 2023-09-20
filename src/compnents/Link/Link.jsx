import PropTypes from 'prop-types';

export default function Link({route}) {
  return (
    <div>
        <li>
          <a href={route.path}>{route.name}</a>
        </li>
    </div>
  )
}
Link.propTypes={
  route: PropTypes.object
}