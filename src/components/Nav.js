import logomark from '../assets/logomark.svg'
import {NavLink, Form} from "react-router-dom";
import {TrashIcon} from "@heroicons/react/20/solid";

const Nav = ({userName}) => {

    const handleFormSubmit = (e) => {
        const confirmed = window.confirm("Delete user and all data?");
        if (!confirmed) {
            e.preventDefault();
        }
    };


    return (
        <nav>
            <NavLink to='/' aria-label='Go to home'>
                <img src={logomark} alt="" height={30}/>
                <span>HomeBudget</span>
            </NavLink>
            {userName && (
                <Form
                    method='POST'
                    action='/logout'
                    onSubmit={handleFormSubmit}
                >
                    <button type='submit' className='btn btn--warning'>
                        <span>Delete user</span>
                        <TrashIcon width={20} />
                    </button>
                </Form>
            )}
        </nav>
    );
};

export default Nav;