import React from 'react'
import { Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import Checkout from '@root/app/new/(checkout)/Checkout'

const ConfigureDraftFromTemplate: React.FC<{
  params: Params
}> = ({ params: { id: draftProjectID } }) => {
  return <Checkout draftProjectID={draftProjectID} />
}

export default ConfigureDraftFromTemplate

export const metadata: Metadata = {
  title: 'Configuration | Payload Cloud',
}
