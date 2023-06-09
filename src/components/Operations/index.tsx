import { OperationsDisplay } from './Display'
import { Tab } from '@mui/material'
import { useEffect, useState } from 'react'
import { TabContext, TabList } from '@mui/lab'
import { TabArithmeticOps, TabEnhancements, TabGaussFiltering, TabLogicalOps, TabConversions } from './Tabs'
import { OperationsResult } from './Result'
import { Result, Images } from 'src/constants/types'
import './styles.scss'
import { TabMorphology } from './Tabs/Morphology'

type OperationsProps = {
    images: Images
    goBack: () => void
}

export const Operations = ({ 
    goBack,
    images
}: OperationsProps) => {

    const [tabsValue, setTabsValue] = useState<string>('0')

    const [result, setResult] = useState<Result | undefined>(undefined)

    return (
        <>
            <OperationsDisplay goBack={goBack} images={images} />

            <div className='operations'>
                <div className='tabs'>
                    <TabContext value={tabsValue}>
                        <TabList 
                            variant='scrollable' 
                            onChange={(_, newValue) => setTabsValue(newValue)}
                        >
                            <Tab label='Conversões' value='0' />
                            <Tab label='Op. Aritméticas' value='1' />
                            <Tab label='Op. Lógicas' value='2' />
                            <Tab label='Realce de Images' value='3' />
                            <Tab label='Filtragem Gaussiana' value='4' />
                            <Tab label='Morfologia' value='5' />
                        </TabList>

                        <TabConversions 
                            tabValue='0'
                            images={images}
                            updateResult={setResult}
                        />
                        <TabArithmeticOps 
                            tabValue='1'
                            images={images}
                            updateResult={setResult}
                        />
                        <TabLogicalOps
                            tabValue='2'
                            images={images}
                            updateResult={setResult}
                        />
                        <TabEnhancements 
                            tabValue='3' 
                            images={images} 
                            updateResult={setResult}
                        />
                        <TabGaussFiltering
                            tabValue='4'
                            images={images}
                            updateResult={setResult}
                        />
                        <TabMorphology
                            tabValue='5'
                            images={images}
                            updateResult={setResult}
                        />
                    </TabContext>
                </div>

                <OperationsResult result={result} />
            </div>
        </>
    )
}