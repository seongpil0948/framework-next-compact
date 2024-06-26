'use client'

import CmButton from '@cp/button'
import { mdiMenuClose, mdiMenuOpen } from '@mdi/js'
import Icon from '@mdi/react'
import { useDisclosure } from '@nextui-org/modal'
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetProps,
} from './sheet'

export default function CommonDrawer(props: {
  children: React.ReactNode
  title?: string
  sheetProps?: Partial<SheetProps>
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { children, sheetProps, title } = props
  const handleClick = () => {
    console.log('clicked', isOpen)
    isOpen ? onClose() : onOpen()
  }
  return (
    <>
      <CmButton isIconOnly onPress={handleClick}>
        <Icon path={isOpen ? mdiMenuClose : mdiMenuOpen} size={1} />
      </CmButton>

      <Sheet isOpen={isOpen} onOpenChange={onOpenChange} {...sheetProps}>
        <SheetContent>
          {(onClose) => (
            <>
              {title && <SheetHeader>{title}</SheetHeader>}
              <SheetBody>{children}</SheetBody>
              <SheetFooter>© 2023 ACF</SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
/*
 - https://github.com/nextui-org/nextui/blob/main/packages/components/modal/src/use-modal.ts 
 - {<AnimatePresence>{state.isOpen ? overlay : null} </AnimatePresence>}
 
 */
