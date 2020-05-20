import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { actions as appActions } from '../slices/app';

export default function Preferences({ onConfirm }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const accentColor = useSelector((state) => state.app.accentColor);
  const btnRef = React.useRef();
  return (
    <>
      <span
        className="floating-button preferences"
        ref={btnRef}
        onClick={onOpen}
      >
        <i className="fa-fw fas fa-cog"></i>
      </span>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={'#800000'}
          borderLeft={'2px solid #fff'}
        >
          <DrawerCloseButton />
          <DrawerHeader>Blade's DEV Menu</DrawerHeader>

          <DrawerBody>
            <span>Accent Color: </span>
            <input
              type={'color'}
              value={accentColor}
              onChange={(e) => {
                console.log(accentColor, e.target.value);

                dispatch(appActions.setAccentColor(e.target.value));
                document.documentElement.style.setProperty(
                  '--accent-color',
                  e.target.value
                );
                console.log(accentColor, e.target.value);
              }}
            />
          </DrawerBody>

          <DrawerFooter>by Blade</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
