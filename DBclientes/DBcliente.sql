USE [master]
GO
/****** Object:  Database [BP4Challenge]    Script Date: 18/3/2023 19:51:30 ******/
CREATE DATABASE [BP4Challenge]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BP4Challenge', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BP4Challenge.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BP4Challenge_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BP4Challenge_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [BP4Challenge] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BP4Challenge].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BP4Challenge] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BP4Challenge] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BP4Challenge] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BP4Challenge] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BP4Challenge] SET ARITHABORT OFF 
GO
ALTER DATABASE [BP4Challenge] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BP4Challenge] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BP4Challenge] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BP4Challenge] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BP4Challenge] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BP4Challenge] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BP4Challenge] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BP4Challenge] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BP4Challenge] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BP4Challenge] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BP4Challenge] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BP4Challenge] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BP4Challenge] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BP4Challenge] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BP4Challenge] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BP4Challenge] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BP4Challenge] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BP4Challenge] SET RECOVERY FULL 
GO
ALTER DATABASE [BP4Challenge] SET  MULTI_USER 
GO
ALTER DATABASE [BP4Challenge] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BP4Challenge] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BP4Challenge] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BP4Challenge] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BP4Challenge] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BP4Challenge] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'BP4Challenge', N'ON'
GO
ALTER DATABASE [BP4Challenge] SET QUERY_STORE = OFF
GO
USE [BP4Challenge]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 18/3/2023 19:51:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[Apellido] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
	[CUIT] [nvarchar](50) NOT NULL,
	[Domicilio] [nvarchar](max) NULL,
	[TelCelular] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Cliente] ON 

INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (1, N'Lucía', N'González', CAST(N'1990-05-23' AS Date), N'20-34567891-2', N'Calle San Martín 123', N'011-555-6789', N'lucia.gonzalez@email.com')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (2, N'Miguel', N'Fernández', CAST(N'1985-12-11' AS Date), N'27-40567891-5', N'Av. Córdoba 456', N'011-456-7890', N'miguel.fernandez@email.com')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (3, N'Carla', N'Alvarez', CAST(N'1995-06-30' AS Date), N'23-32567891-1', N'Calle Pueyrredón 789', N'011-444-5678', N'carla.alvarez@email.com')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (7, N'Mica', N'Monjke', CAST(N'2023-03-17' AS Date), N'nose', N'micasa', N'20', N'flow')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (6, N'El pro', N'No tiene', CAST(N'2023-03-07' AS Date), N'38', N'micasa', N'notengo', N'satur')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (8, N'Melani', N'Monjke', CAST(N'2023-03-17' AS Date), N'nose', N'micasa', N'20', N'flow')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (13, N'Diez Gomez Nicolas Lionel', N'asdasd', CAST(N'2023-03-16' AS Date), N'123123', N'Manuel Ponferrada 69', N'03834336665', N'lionel_1014@hotmail.com.ar')
INSERT [dbo].[Cliente] ([Id], [Nombre], [Apellido], [FechaNacimiento], [CUIT], [Domicilio], [TelCelular], [Email]) VALUES (14, N'asdasd', N'123123', CAST(N'2023-03-09' AS Date), N'123123', N'Manuel Ponferrada 69', N'03834336665', N'satur.1512@gmail.com')
SET IDENTITY_INSERT [dbo].[Cliente] OFF
GO
USE [master]
GO
ALTER DATABASE [BP4Challenge] SET  READ_WRITE 
GO
