import React from 'react'
import Button from 'react-bootstrap/Button';
interface NavBarProps {

}
export const NavBar: React.FC<NavBarProps> = ({})=> {
        return(
            <div className="bg-primary p-4 w-100 d-flex justify-content-between align-items-center" >
                <h2 className="text-white">Warehouse</h2>
                <div>
                    <Button>Home</Button>
                    <Button>About</Button>
                    <Button>Contacts</Button>
                </div>
            </div>
        );
}