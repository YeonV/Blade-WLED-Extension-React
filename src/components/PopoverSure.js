import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
} from '@chakra-ui/core';

export default function PopoverSure({ onConfirm }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <Popover
      usePortal
      isOpen={isOpen}
      onOpen={open}
      onClose={close}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger color={'black'}>
        <div className="button deleteButton">
          <i className="icons">&#xe037;</i>
        </div>
      </PopoverTrigger>
      <PopoverContent
        zIndex={5}
        color={'black'}
        width="auto"
        _focus={{ outline: 'none' }}
        _active={{ outline: 'none' }}
      >
        <PopoverArrow />
        <PopoverHeader>
          Are you sure?
          <ButtonGroup size="sm" ml="1rem">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              variantColor="gray"
            >
              cancel
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onConfirm();
              }}
              variantColor="red"
            >
              delete
            </Button>
          </ButtonGroup>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
