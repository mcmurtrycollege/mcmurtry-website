import React from 'react';
import { Box, Image } from 'rebass';
import Title from '../../general/title';
import ContactCards from '../../general/contactcards';
import './wellbeing.css';
import { RHAs } from './wellbeing.json';

const ResidentHealthAdvisors = () => (
    <div className='wellbeing-page'>
        <Title width={300} title="Rice Health Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
            {RHAs.description}
        </Box>
        <div>
            <ContactCards content={RHAs.members} width={250} />
        </div>
    </div>
)

export default ResidentHealthAdvisors;