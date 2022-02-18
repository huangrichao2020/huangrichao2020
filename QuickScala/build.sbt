name := "hello"      // 项目名称

organization := "com.growingio.quickscala"  // 组织名称

version := "0.0.1"  // 版本号

scalaVersion := "2.10.6"   // 使用的Scala版本号

// 添加项目依赖

libraryDependencies ++= Seq(
                            "ch.qos.logback" % "logback-core" % "1.0.0",
                            "ch.qos.logback" % "logback-classic" % "1.0.0"
                            )

// 添加测试代码编译或者运行期间使用的依赖
libraryDependencies ++= Seq("org.scalatest" %% "scalatest" % "1.8" % "test")

libraryDependencies += "com.typesafe.scala-logging" %% "scala-logging-slf4j" % "2.0.4"
   

 