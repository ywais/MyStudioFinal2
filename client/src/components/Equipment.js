import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Equipment(props) {
  const [hour, setHour] = useState('');

  return (
    <div className='Equipment'>
      
    </div>
  );
}

export default Equipment;

// docker exec -it dhkSQL mysql -uroot -p

// docker run --name=dhkSQL -d mysql/mysql-server:8.0.21

// docker run --name=dhkSQL \
// --mount type=bind,src=/root/sql_config/my.cnf,dst=/etc/my.cnf \
// -d mysql/mysql-server:8.0.21
