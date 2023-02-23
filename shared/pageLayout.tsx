import React, { Fragment, ReactNode } from 'react'
import Meta from '@/components/meta'
import { MotionBox } from './motion'

type Props = {
  children: ReactNode
  title: string
  description?: string
  keywords?: string
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const PageLayout = ({
  children,
  title,
  description,
  keywords,
}: Props): JSX.Element => (
  <Fragment>
    <Meta
      title={title}
      description={description}
      keywords={keywords}
    />
    <MotionBox
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </MotionBox>
  </Fragment>
)

export default PageLayout
