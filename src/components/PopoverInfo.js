import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
} from '@chakra-ui/core';

export default function PopoverInfo({
  text = 'no Text',
  position = 'right',
  isOpen = false,
  style,
}) {
  return (
    <Popover usePortal isOpen={isOpen} placement={position} closeOnBlur={false}>
      <PopoverTrigger color={'black'}>
        <div style={{ zIndex: 101, position: 'absolute', ...style }} />
      </PopoverTrigger>
      <PopoverContent
        zIndex={5}
        color={'black'}
        width="auto"
        _focus={{ outline: 'none' }}
        _active={{ outline: 'none' }}
      >
        <PopoverArrow />
        <PopoverHeader>{text}</PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
