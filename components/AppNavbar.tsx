import { ReactNode } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as CLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Links = [
  { label: "หน้าหลัก", href: "/" },
  { label: "สินค้า (SSR)", href: "/product" },
  { label: "แผนที่ (SSG)", href: "/map" },
  { label: "จังหวัด", href: "/province" },
  { label: "Log in", href: "/login" },
];

const NavLink = ({ children, href, classActive }: { children: ReactNode; href: string; classActive: string }) => (
  <Link href={href} passHref legacyBehavior>
    <CLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.500", "gray.700"),
      }}
      className={classActive}
    >
      {children}
    </CLink>
  </Link>
);

export default function AppNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box bg={useColorModeValue("gray.700", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box color="white">Logo</Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((menu, index) => (
                <NavLink key={index} href={menu.href} classActive={router.pathname === menu.href ? "menu-active" : ""}>
                  <Text color="white">{menu.label}</Text>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={"center"}>
            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((menu, index) => (
                <NavLink key={index} href={menu.href} classActive={router.pathname === menu.href ? "menu-active" : ""}>
                  <Text color="white">{menu.label}</Text>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
