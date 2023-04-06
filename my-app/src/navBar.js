import React from 'react';
import './navBar.css'


function navBar(){
    return (
    <div>
	    <nav class="sidenav">
            <table>
          <td>
            Home
          </td>
          <td>
            Projects
          </td>
          <td>
            Contact
          </td>
        </table>
			</nav>
      <main className='main'>
        <p>Hi</p>
      </main>
    </div>
    )
}
export default navBar 