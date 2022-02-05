import { React } from 'react';
import ConnectWalletButton from './button/ConnectWalletButton';
import CreateProposalButton from './button/CreateProposalButton';

const LandingPage = ({ checkWallet }) => {
    return (
        <>
            <ConnectWalletButton />
            <CreateProposalButton />
        </>
    )
}

export default LandingPage;